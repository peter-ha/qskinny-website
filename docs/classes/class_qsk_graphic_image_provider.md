---
title: QskGraphicImageProvider
layout: docs

---


**Module:** **[Graphic](/docs/modules/group___graphic/)**



Inherits from QQuickImageProvider

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicImageProvider](/docs/classes/class_qsk_graphic_image_provider/#function-qskgraphicimageprovider)**(const QString & providerId, ImageType type) |
| | **[~QskGraphicImageProvider](/docs/classes/class_qsk_graphic_image_provider/#function-~qskgraphicimageprovider)**() override |
| QImage | **[requestImage](/docs/classes/class_qsk_graphic_image_provider/#function-requestimage)**(const QString & id, QSize * size, const QSize & requestedSize) override |
| QPixmap | **[requestPixmap](/docs/classes/class_qsk_graphic_image_provider/#function-requestpixmap)**(const QString & id, QSize * size, const QSize & requestedSize) override |
| QQuickTextureFactory * | **[requestTexture](/docs/classes/class_qsk_graphic_image_provider/#function-requesttexture)**(const QString & id, QSize * size, const QSize & requestedSize) override |
| QString | **[graphicProviderId](/docs/classes/class_qsk_graphic_image_provider/#function-graphicproviderid)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| const [QskGraphic](/docs/classes/class_qsk_graphic/) * | **[requestGraphic](/docs/classes/class_qsk_graphic_image_provider/#function-requestgraphic)**(const QString & id) const |

## Public Functions Documentation

### function QskGraphicImageProvider

```cpp
QskGraphicImageProvider(
    const QString & providerId,
    ImageType type
)
```


### function ~QskGraphicImageProvider

```cpp
~QskGraphicImageProvider() override
```


### function requestImage

```cpp
QImage requestImage(
    const QString & id,
    QSize * size,
    const QSize & requestedSize
) override
```


### function requestPixmap

```cpp
QPixmap requestPixmap(
    const QString & id,
    QSize * size,
    const QSize & requestedSize
) override
```


### function requestTexture

```cpp
QQuickTextureFactory * requestTexture(
    const QString & id,
    QSize * size,
    const QSize & requestedSize
) override
```


### function graphicProviderId

```cpp
QString graphicProviderId() const
```


## Protected Functions Documentation

### function requestGraphic

```cpp
const QskGraphic * requestGraphic(
    const QString & id
) const
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET