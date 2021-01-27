---
title: QskTextureNodePrivate
layout: docs

---




Inherits from QSGGeometryNodePrivate

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextureNodePrivate](/docs/classes/class_qsk_texture_node_private/#function-qsktexturenodeprivate)**() |
| void | **[setTextureId](/docs/classes/class_qsk_texture_node_private/#function-settextureid)**(QQuickWindow * window, uint id) |
| void | **[updateTextureGeometry](/docs/classes/class_qsk_texture_node_private/#function-updatetexturegeometry)**(const QQuickWindow * window) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| QSGGeometry | **[geometry](/docs/classes/class_qsk_texture_node_private/#variable-geometry)**  |
| OpaqueTextureMaterial | **[opaqueMaterial](/docs/classes/class_qsk_texture_node_private/#variable-opaquematerial)**  |
| TextureMaterial | **[material](/docs/classes/class_qsk_texture_node_private/#variable-material)**  |
| QRectF | **[rect](/docs/classes/class_qsk_texture_node_private/#variable-rect)**  |
| Qt::Orientations | **[mirrored](/docs/classes/class_qsk_texture_node_private/#variable-mirrored)**  |

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

Updated on 26 January 2021 at 09:44:52 CET