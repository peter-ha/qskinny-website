---
title: QskGraphicImageProvider
layout: docs

---


**Module:** **[Graphic](/docs/modules/group__Graphic/)**



Inherits from QQuickImageProvider

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicImageProvider](/docs/classes/classQskGraphicImageProvider/#function-qskgraphicimageprovider)**(const QString & providerId, ImageType type) |
| | **[~QskGraphicImageProvider](/docs/classes/classQskGraphicImageProvider/#function-~qskgraphicimageprovider)**() override |
| QImage | **[requestImage](/docs/classes/classQskGraphicImageProvider/#function-requestimage)**(const QString & id, QSize * size, const QSize & requestedSize) override |
| QPixmap | **[requestPixmap](/docs/classes/classQskGraphicImageProvider/#function-requestpixmap)**(const QString & id, QSize * size, const QSize & requestedSize) override |
| QQuickTextureFactory * | **[requestTexture](/docs/classes/classQskGraphicImageProvider/#function-requesttexture)**(const QString & id, QSize * size, const QSize & requestedSize) override |
| QString | **[graphicProviderId](/docs/classes/classQskGraphicImageProvider/#function-graphicproviderid)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| const [QskGraphic](/docs/classes/classQskGraphic/) * | **[requestGraphic](/docs/classes/classQskGraphicImageProvider/#function-requestgraphic)**(const QString & id) const |

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

Updated on  3 February 2021 at 15:05:45 CET