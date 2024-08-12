from django.db import models


# Create your models here.
class Technology(models.Model):
    CATEGORY_CHOICES = [
        ('programming_language', 'Programming Language'),
        ('frontend', 'Frontend'),
        ('database', 'Database'),
        ('framework', 'Framework'),
        ('tool', 'Tool'),
        ('library', 'Library'),
        ('other', 'Other')
    ]

    name = models.CharField(max_length=30)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES, default='other')

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.ManyToManyField(Technology)
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/images/')

    def __str__(self):
        return f'{self.project.title} Image'
