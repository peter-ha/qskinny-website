---
title: QskSkinFactory
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinFactory](/docs/classes/class_qsk_skin_factory/#function-qskskinfactory)**(QObject * parent =nullptr) |
| | **[~QskSkinFactory](/docs/classes/class_qsk_skin_factory/#function-~qskskinfactory)**() override |
| virtual QStringList | **[skinNames](/docs/classes/class_qsk_skin_factory/#function-skinnames)**() const =0 |
| virtual QskSkin * | **[createSkin](/docs/classes/class_qsk_skin_factory/#function-createskin)**(const QString & skinName) =0 |

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

Updated on 26 January 2021 at 09:44:54 CET