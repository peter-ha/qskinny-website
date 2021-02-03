---
title: QskGraphicLabel
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Graphic](/docs/classes/classQskGraphicLabel/#subcontrol-graphic)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FillMode](/docs/classes/classQskGraphicLabel/#enum-fillmode)** { Stretch, PreserveAspectFit, PreserveAspectCrop, Pad} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicLabel](/docs/classes/classQskGraphicLabel/#function-qskgraphiclabel)**(QQuickItem * parent =nullptr) |
| | **[QskGraphicLabel](/docs/classes/classQskGraphicLabel/#function-qskgraphiclabel)**(const QUrl & url, QQuickItem * parent =nullptr) |
| | **[QskGraphicLabel](/docs/classes/classQskGraphicLabel/#function-qskgraphiclabel)**(const QString & url, QQuickItem * parent =nullptr) |
| | **[QskGraphicLabel](/docs/classes/classQskGraphicLabel/#function-qskgraphiclabel)**(const [QskGraphic](/docs/classes/classQskGraphic/) & graphic, QQuickItem * parent =nullptr) |
| | **[~QskGraphicLabel](/docs/classes/classQskGraphicLabel/#function-~qskgraphiclabel)**() override |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[graphic](/docs/classes/classQskGraphicLabel/#function-graphic)**() const |
| virtual QskColorFilter | **[graphicFilter](/docs/classes/classQskGraphicLabel/#function-graphicfilter)**() const |
| QUrl | **[source](/docs/classes/classQskGraphicLabel/#function-source)**() const |
| void | **[setSource](/docs/classes/classQskGraphicLabel/#function-setsource)**(const QString & source) |
| void | **[setSource](/docs/classes/classQskGraphicLabel/#function-setsource)**(const QUrl & url) |
| void | **[setSourceSize](/docs/classes/classQskGraphicLabel/#function-setsourcesize)**(const QSize & size) |
| void | **[resetSourceSize](/docs/classes/classQskGraphicLabel/#function-resetsourcesize)**() |
| QSize | **[sourceSize](/docs/classes/classQskGraphicLabel/#function-sourcesize)**() const |
| QSizeF | **[effectiveSourceSize](/docs/classes/classQskGraphicLabel/#function-effectivesourcesize)**() const |
| void | **[setMirror](/docs/classes/classQskGraphicLabel/#function-setmirror)**(bool on) |
| bool | **[mirror](/docs/classes/classQskGraphicLabel/#function-mirror)**() const |
| void | **[setAlignment](/docs/classes/classQskGraphicLabel/#function-setalignment)**(Qt::Alignment alignment) |
| void | **[resetAlignment](/docs/classes/classQskGraphicLabel/#function-resetalignment)**() |
| Qt::Alignment | **[alignment](/docs/classes/classQskGraphicLabel/#function-alignment)**() const |
| void | **[setFillMode](/docs/classes/classQskGraphicLabel/#function-setfillmode)**(FillMode mode) |
| FillMode | **[fillMode](/docs/classes/classQskGraphicLabel/#function-fillmode)**() const |
| bool | **[isEmpty](/docs/classes/classQskGraphicLabel/#function-isempty)**() const |
| void | **[setGraphicRole](/docs/classes/classQskGraphicLabel/#function-setgraphicrole)**(int role) |
| void | **[resetGraphicRole](/docs/classes/classQskGraphicLabel/#function-resetgraphicrole)**() |
| int | **[graphicRole](/docs/classes/classQskGraphicLabel/#function-graphicrole)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/classQskGraphicLabel/#function-changeevent)**(QEvent * event) override |
| void | **[updateResources](/docs/classes/classQskGraphicLabel/#function-updateresources)**() override |
| virtual [QskGraphic](/docs/classes/classQskGraphic/) | **[loadSource](/docs/classes/classQskGraphicLabel/#function-loadsource)**(const QUrl & url) const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[sourceChanged](/docs/classes/classQskGraphicLabel/#signal-sourcechanged)**() |
| void | **[mirrorChanged](/docs/classes/classQskGraphicLabel/#signal-mirrorchanged)**() |
| void | **[sourceSizeChanged](/docs/classes/classQskGraphicLabel/#signal-sourcesizechanged)**() |
| void | **[graphicRoleChanged](/docs/classes/classQskGraphicLabel/#signal-graphicrolechanged)**(int ) |
| void | **[alignmentChanged](/docs/classes/classQskGraphicLabel/#signal-alignmentchanged)**(Qt::Alignment ) |
| void | **[fillModeChanged](/docs/classes/classQskGraphicLabel/#signal-fillmodechanged)**(FillMode ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setGraphic](/docs/classes/classQskGraphicLabel/#slot-setgraphic)**(const [QskGraphic](/docs/classes/classQskGraphic/) & graphic) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QUrl | **[source](/docs/classes/classQskGraphicLabel/#property-source)**  |
| bool | **[mirror](/docs/classes/classQskGraphicLabel/#property-mirror)**  |
| QSize | **[sourceSize](/docs/classes/classQskGraphicLabel/#property-sourcesize)**  |
| int | **[graphicRole](/docs/classes/classQskGraphicLabel/#property-graphicrole)**  |
| Qt::Alignment | **[alignment](/docs/classes/classQskGraphicLabel/#property-alignment)**  |
| FillMode | **[fillMode](/docs/classes/classQskGraphicLabel/#property-fillmode)**  |

## Public Subcontrols Documentation

### subcontrol Graphic




## Public Types Documentation

### enum FillMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Stretch | |   |
| PreserveAspectFit | |   |
| PreserveAspectCrop | |   |
| Pad | |   |




## Public Functions Documentation

### function QskGraphicLabel

```cpp
QskGraphicLabel(
    QQuickItem * parent =nullptr
)
```


### function QskGraphicLabel

```cpp
QskGraphicLabel(
    const QUrl & url,
    QQuickItem * parent =nullptr
)
```


### function QskGraphicLabel

```cpp
QskGraphicLabel(
    const QString & url,
    QQuickItem * parent =nullptr
)
```


### function QskGraphicLabel

```cpp
QskGraphicLabel(
    const QskGraphic & graphic,
    QQuickItem * parent =nullptr
)
```


### function ~QskGraphicLabel

```cpp
~QskGraphicLabel() override
```


### function graphic

```cpp
QskGraphic graphic() const
```


### function graphicFilter

```cpp
virtual QskColorFilter graphicFilter() const
```


### function source

```cpp
QUrl source() const
```


### function setSource

```cpp
void setSource(
    const QString & source
)
```


### function setSource

```cpp
void setSource(
    const QUrl & url
)
```


### function setSourceSize

```cpp
void setSourceSize(
    const QSize & size
)
```


### function resetSourceSize

```cpp
void resetSourceSize()
```


### function sourceSize

```cpp
QSize sourceSize() const
```


### function effectiveSourceSize

```cpp
QSizeF effectiveSourceSize() const
```


### function setMirror

```cpp
void setMirror(
    bool on
)
```


### function mirror

```cpp
bool mirror() const
```


### function setAlignment

```cpp
void setAlignment(
    Qt::Alignment alignment
)
```


### function resetAlignment

```cpp
void resetAlignment()
```


### function alignment

```cpp
Qt::Alignment alignment() const
```


### function setFillMode

```cpp
void setFillMode(
    FillMode mode
)
```


### function fillMode

```cpp
FillMode fillMode() const
```


### function isEmpty

```cpp
bool isEmpty() const
```


### function setGraphicRole

```cpp
void setGraphicRole(
    int role
)
```


### function resetGraphicRole

```cpp
void resetGraphicRole()
```


### function graphicRole

```cpp
int graphicRole() const
```


## Protected Functions Documentation

### function changeEvent

```cpp
void changeEvent(
    QEvent * event
) override
```


### function updateResources

```cpp
void updateResources() override
```


### function loadSource

```cpp
virtual QskGraphic loadSource(
    const QUrl & url
) const
```


## Public Signals Documentation

### signal sourceChanged

```cpp
void sourceChanged()
```


### signal mirrorChanged

```cpp
void mirrorChanged()
```


### signal sourceSizeChanged

```cpp
void sourceSizeChanged()
```


### signal graphicRoleChanged

```cpp
void graphicRoleChanged(
    int 
)
```


### signal alignmentChanged

```cpp
void alignmentChanged(
    Qt::Alignment 
)
```


### signal fillModeChanged

```cpp
void fillModeChanged(
    FillMode 
)
```


## Public Slots Documentation

### slot setGraphic

```cpp
void setGraphic(
    const QskGraphic & graphic
)
```


## Public Property Documentation

### property source

```cpp
QUrl source;
```


### property mirror

```cpp
bool mirror;
```


### property sourceSize

```cpp
QSize sourceSize;
```


### property graphicRole

```cpp
int graphicRole;
```


### property alignment

```cpp
Qt::Alignment alignment;
```


### property fillMode

```cpp
FillMode fillMode;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET