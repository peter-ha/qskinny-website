---
title: QskGraphicProvider
layout: docs

---


**Module:** **[Graphic](/docs/modules/group__Graphic/)**



Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicProvider](/docs/classes/classQskGraphicProvider/#function-qskgraphicprovider)**(QObject * parent =nullptr) |
| | **[~QskGraphicProvider](/docs/classes/classQskGraphicProvider/#function-~qskgraphicprovider)**() override |
| void | **[setCacheSize](/docs/classes/classQskGraphicProvider/#function-setcachesize)**(int size) |
| int | **[cacheSize](/docs/classes/classQskGraphicProvider/#function-cachesize)**() const |
| void | **[clearCache](/docs/classes/classQskGraphicProvider/#function-clearcache)**() |
| const [QskGraphic](/docs/classes/classQskGraphic/) * | **[requestGraphic](/docs/classes/classQskGraphicProvider/#function-requestgraphic)**(const QString & id) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual const [QskGraphic](/docs/classes/classQskGraphic/) * | **[loadGraphic](/docs/classes/classQskGraphicProvider/#function-loadgraphic)**(const QString & id) const =0 |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< PrivateData > | **[m_data](/docs/classes/classQskGraphicProvider/#variable-m_data)**  |

## Public Functions Documentation

### function QskGraphicProvider

```cpp
QskGraphicProvider(
    QObject * parent =nullptr
)
```


### function ~QskGraphicProvider

```cpp
~QskGraphicProvider() override
```


### function setCacheSize

```cpp
void setCacheSize(
    int size
)
```


### function cacheSize

```cpp
int cacheSize() const
```


### function clearCache

```cpp
void clearCache()
```


### function requestGraphic

```cpp
const QskGraphic * requestGraphic(
    const QString & id
) const
```


## Protected Functions Documentation

### function loadGraphic

```cpp
virtual const QskGraphic * loadGraphic(
    const QString & id
) const =0
```


## Protected Attributes Documentation

### variable m_data

```cpp
std::unique_ptr< PrivateData > m_data;
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET