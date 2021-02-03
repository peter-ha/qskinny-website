---
title: QskTextureNodePrivate
layout: docs

---




Inherits from QSGGeometryNodePrivate

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextureNodePrivate](/docs/classes/classQskTextureNodePrivate/#function-qsktexturenodeprivate)**() |
| void | **[setTextureId](/docs/classes/classQskTextureNodePrivate/#function-settextureid)**(QQuickWindow * window, uint id) |
| void | **[updateTextureGeometry](/docs/classes/classQskTextureNodePrivate/#function-updatetexturegeometry)**(const QQuickWindow * window) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| QSGGeometry | **[geometry](/docs/classes/classQskTextureNodePrivate/#variable-geometry)**  |
| OpaqueTextureMaterial | **[opaqueMaterial](/docs/classes/classQskTextureNodePrivate/#variable-opaquematerial)**  |
| TextureMaterial | **[material](/docs/classes/classQskTextureNodePrivate/#variable-material)**  |
| QRectF | **[rect](/docs/classes/classQskTextureNodePrivate/#variable-rect)**  |
| Qt::Orientations | **[mirrored](/docs/classes/classQskTextureNodePrivate/#variable-mirrored)**  |

## Public Functions Documentation

### function QskTextureNodePrivate

```cpp
inline QskTextureNodePrivate()
```


### function setTextureId

```cpp
void setTextureId(
    QQuickWindow * window,
    uint id
)
```


### function updateTextureGeometry

```cpp
inline void updateTextureGeometry(
    const QQuickWindow * window
)
```


## Public Attributes Documentation

### variable geometry

```cpp
QSGGeometry geometry;
```


### variable opaqueMaterial

```cpp
OpaqueTextureMaterial opaqueMaterial;
```


### variable material

```cpp
TextureMaterial material;
```


### variable rect

```cpp
QRectF rect;
```


### variable mirrored

```cpp
Qt::Orientations mirrored;
```


-------------------------------

Updated on  3 February 2021 at 15:05:39 CET