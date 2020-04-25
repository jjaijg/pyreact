from rest_framework import routers
from .api import NameViewSet

router = routers.DefaultRouter()
router.register('api/names', NameViewSet, 'names')

urlpatterns = router.urls