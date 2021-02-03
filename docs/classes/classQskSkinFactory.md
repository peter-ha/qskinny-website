---
title: QskSkinFactory
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinFactory](/docs/classes/classQskSkinFactory/#function-qskskinfactory)**(QObject * parent =nullptr) |
| | **[~QskSkinFactory](/docs/classes/classQskSkinFactory/#function-~qskskinfactory)**() override |
| virtual QStringList | **[skinNames](/docs/classes/classQskSkinFactory/#function-skinnames)**() const =0 |
| virtual QskSkin * | **[createSkin](/docs/classes/classQskSkinFactory/#function-createskin)**(const QString & skinName) =0 |

## Public Functions Documentation

### function QskSkinFactory

```cpp
QskSkinFactory(
    QObject * parent =nullptr
)
```


### function ~QskSkinFactory

```cpp
~QskSkinFactory() override
```


### function skinNames

```cpp
virtual QStringList skinNames() const =0
```


### function createSkin

```cpp
virtual QskSkin * createSkin(
    const QString & skinName
) =0
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET