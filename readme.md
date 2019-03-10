#vblog

### Backend
- PHP >= 7.2
- MySQL 5.7
- ...

### Frontend
- ReactJS
- ...

**[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)**

This follow PHP Standards Recommendations: PSR1, PSR2
```
./vendor/bin/phpcs -n --standard=phpcs.xml
```

**[PHPMD](https://github.com/phpmd/phpmd)**
```
./vendor/bin/phpmd app text phpmd.xml
```