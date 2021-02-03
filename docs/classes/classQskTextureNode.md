---
title: QskTextureNode
layout: docs

---


**Module:** **[Scenegraph](/docs/modules/group__Scenegraph/)**



Inherits from QSGGeometryNode

Inherited by [QskGraphicNode](/docs/classes/classQskGraphicNode/), [QskPaintedNode](/docs/classes/classQskPaintedNode/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextureNode](/docs/classes/classQskTextureNode/#function-qsktexturenode)**() |
| | **[~QskTextureNode](/docs/classes/classQskTextureNode/#function-~qsktexturenode)**() override |
| bool | **[isNull](/docs/classes/classQskTextureNode/#function-isnull)**() const |
| void | **[setTexture](/docs/classes/classQskTextureNode/#function-settexture)**(QQuickWindow * window, const QRectF & rect, uint id, Qt::Orientations mirrored =Qt::Orientations()) |
| uint | **[textureId](/docs/classes/classQskTextureNode/#function-textureid)**() const |
| QRectF | **[rect](/docs/classes/classQskTextureNode/#function-rect)**() const |
| Qt::Orientations | **[mirrored](/docs/classes/classQskTextureNode/#function-mirrored)**() const |

## Public Functions Documentation

### function QskTextureNode

```cpp
QskTextureNode()
```


### function ~QskTextureNode

```cpp
~QskTextureNode() override
```


### function isNull

```cpp
bool isNull() const
```


### function setTexture

```cpp
void setTexture(
    QQuickWindow * window,
    const QRectF & rect,
    uint id,
    Qt::Orientations mirrored =Qt::Orientations()
)
```


### function textureId

```cpp
uint textureId() const
```


### function rect

```cpp
QRectF rect() const
```


### function mirrored

```cpp
Qt::Orientations mirrored() const
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET