---
title: QskGraphicTextureFactory
layout: docs

---


**Module:** **[Graphic](/docs/modules/group___graphic/)**



Inherits from QQuickTextureFactory

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicTextureFactory](/docs/classes/class_qsk_graphic_texture_factory/#function-qskgraphictexturefactory)**() |
| | **[QskGraphicTextureFactory](/docs/classes/class_qsk_graphic_texture_factory/#function-qskgraphictexturefactory)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic, const QSize & size) |
| | **[~QskGraphicTextureFactory](/docs/classes/class_qsk_graphic_texture_factory/#function-~qskgraphictexturefactory)**() override |
| void | **[setGraphic](/docs/classes/class_qsk_graphic_texture_factory/#function-setgraphic)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[graphic](/docs/classes/class_qsk_graphic_texture_factory/#function-graphic)**() const |
| void | **[setColorFilter](/docs/classes/class_qsk_graphic_texture_factory/#function-setcolorfilter)**(const QskColorFilter & colorFilter) |
| const QskColorFilter & | **[colorFilter](/docs/classes/class_qsk_graphic_texture_factory/#function-colorfilter)**() const |
| void | **[setSize](/docs/classes/class_qsk_graphic_texture_factory/#function-setsize)**(const QSize & size) |
| QSize | **[size](/docs/classes/class_qsk_graphic_texture_factory/#function-size)**() const |
| QSGTexture * | **[createTexture](/docs/classes/class_qsk_graphic_texture_factory/#function-createtexture)**(QQuickWindow * window) const override |
| QSize | **[textureSize](/docs/classes/class_qsk_graphic_texture_factory/#function-texturesize)**() const override |
| int | **[textureByteCount](/docs/classes/class_qsk_graphic_texture_factory/#function-texturebytecount)**() const override |
| QImage | **[image](/docs/classes/class_qsk_graphic_texture_factory/#function-image)**() const override |

## Public Functions Documentation

### function QskGraphicTextureFactory

```cpp
QskGraphicTextureFactory()
```


### function QskGraphicTextureFactory

```cpp
QskGraphicTextureFactory(
    const QskGraphic & graphic,
    const QSize & size
)
```


### function ~QskGraphicTextureFactory

```cpp
~QskGraphicTextureFactory() override
```


### function setGraphic

```cpp
void setGraphic(
    const QskGraphic & graphic
)
```


### function graphic

```cpp
QskGraphic graphic() const
```


### function setColorFilter

```cpp
void setColorFilter(
    const QskColorFilter & colorFilter
)
```


### function colorFilter

```cpp
const QskColorFilter & colorFilter() const
```


### function setSize

```cpp
void setSize(
    const QSize & size
)
```


### function size

```cpp
QSize size() const
```


### function createTexture

```cpp
QSGTexture * createTexture(
    QQuickWindow * window
) const override
```


### function textureSize

```cpp
QSize textureSize() const override
```


### function textureByteCount

```cpp
int textureByteCount() const override
```


### function image

```cpp
QImage image() const override
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET