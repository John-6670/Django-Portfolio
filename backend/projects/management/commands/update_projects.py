from django.core.management.base import BaseCommand
from ...models import Project
from ...github import get_commit_dates


class Command(BaseCommand):
    help = 'Update project dates from GitHub'

    def handle(self, *args, **kwargs):
        for project in Project.objects.all():
            if project.link:
                last_date = get_commit_dates(project.link)
                if last_date:
                    project.end_date = last_date
                    project.save()

        self.stdout.write(self.style.SUCCESS('Successfully updated project dates'))