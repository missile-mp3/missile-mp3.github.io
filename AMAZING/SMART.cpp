#include <cstdlib>

int main ()
{
    void *pmo = (void*) malloc(sizeof(NULL));
    free(pmo);
    return 445;

}
