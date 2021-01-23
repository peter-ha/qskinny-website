---
title: QskGraphicProvider
layout: docs

---


**Module:** **[Graphic](/docs/modules/group___graphic/)**



Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicProvider](/docs/classes/class_qsk_graphic_provider/#function-qskgraphicprovider)**(QObject * parent =nullptr) |
| | **[~QskGraphicProvider](/docs/classes/class_qsk_graphic_provider/#function-~qskgraphicprovider)**() override |
| void | **[setCacheSize](/docs/classes/class_qsk_graphic_provider/#function-setcachesize)**(int size) |
| int | **[cacheSize](/docs/classes/class_qsk_graphic_provider/#function-cachesize)**() const |
| void | **[clearCache](/docs/classes/class_qsk_graphic_provider/#function-clearcache)**() |
| const [QskGraphic](/docs/classes/class_qsk_graphic/) * | **[requestGraphic](/docs/classes/class_qsk_graphic_provider/#function-requestgraphic)**(const QString & id) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual const [QskGraphic](/docs/classes/class_qsk_graphic/) * | **[loadGraphic](/docs/classes/class_qsk_graphic_provider/#function-loadgraphic)**(const QString & id) const =0 |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< PrivateData > | **[m_data](/docs/classes/class_qsk_graphic_provider/#variable-m_data)**  |

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

Updated on 23 January 2021 at 09:50:35 CET