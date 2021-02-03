---
title: QskPushButton
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskAbstractButton

Inherited by [QskDialogButton](/docs/classes/classQskDialogButton/)

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskPushButton/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Text](/docs/classes/classQskPushButton/#subcontrol-text)**  |
| const QskAspect::Subcontrol | **[Graphic](/docs/classes/classQskPushButton/#subcontrol-graphic)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPushButton](/docs/classes/classQskPushButton/#function-qskpushbutton)**(QQuickItem * parent =nullptr) |
| | **[QskPushButton](/docs/classes/classQskPushButton/#function-qskpushbutton)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskPushButton](/docs/classes/classQskPushButton/#function-~qskpushbutton)**() override |
| void | **[setCorner](/docs/classes/classQskPushButton/#function-setcorner)**(const QskCorner & corner) |
| QskCorner | **[corner](/docs/classes/classQskPushButton/#function-corner)**() const |
| QString | **[text](/docs/classes/classQskPushButton/#function-text)**() const |
| void | **[setTextOptions](/docs/classes/classQskPushButton/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/classQskPushButton/#function-textoptions)**() const |
| QUrl | **[graphicSource](/docs/classes/classQskPushButton/#function-graphicsource)**() const |
| QSizeF | **[graphicSourceSize](/docs/classes/classQskPushButton/#function-graphicsourcesize)**() const |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[graphic](/docs/classes/classQskPushButton/#function-graphic)**() const |
| bool | **[hasGraphic](/docs/classes/classQskPushButton/#function-hasgraphic)**() const |
| void | **[resetGraphicSourceSize](/docs/classes/classQskPushButton/#function-resetgraphicsourcesize)**() |
| void | **[setFlat](/docs/classes/classQskPushButton/#function-setflat)**(bool on) |
| bool | **[isFlat](/docs/classes/classQskPushButton/#function-isflat)**() const |
| QFont | **[font](/docs/classes/classQskPushButton/#function-font)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/classQskPushButton/#function-layoutrectforsize)**(const QSizeF & size) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/classQskPushButton/#function-changeevent)**(QEvent * event) override |
| void | **[updateResources](/docs/classes/classQskPushButton/#function-updateresources)**() override |
| virtual [QskGraphic](/docs/classes/classQskGraphic/) | **[loadGraphic](/docs/classes/classQskPushButton/#function-loadgraphic)**(const QUrl & url) const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[cornerChanged](/docs/classes/classQskPushButton/#signal-cornerchanged)**() |
| void | **[borderWidthChanged](/docs/classes/classQskPushButton/#signal-borderwidthchanged)**() |
| void | **[textChanged](/docs/classes/classQskPushButton/#signal-textchanged)**() |
| void | **[textOptionsChanged](/docs/classes/classQskPushButton/#signal-textoptionschanged)**() |
| void | **[flatChanged](/docs/classes/classQskPushButton/#signal-flatchanged)**() |
| void | **[graphicChanged](/docs/classes/classQskPushButton/#signal-graphicchanged)**() |
| void | **[graphicSourceChanged](/docs/classes/classQskPushButton/#signal-graphicsourcechanged)**() |
| void | **[graphicSourceSizeChanged](/docs/classes/classQskPushButton/#signal-graphicsourcesizechanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/classQskPushButton/#slot-settext)**(const QString & text) |
| void | **[setGraphicSource](/docs/classes/classQskPushButton/#slot-setgraphicsource)**(const QUrl & url) |
| void | **[setGraphicSource](/docs/classes/classQskPushButton/#slot-setgraphicsource)**(const QString & source) |
| void | **[setGraphic](/docs/classes/classQskPushButton/#slot-setgraphic)**(const [QskGraphic](/docs/classes/classQskGraphic/) & graphic) |
| void | **[setGraphicSourceSize](/docs/classes/classQskPushButton/#slot-setgraphicsourcesize)**(const QSizeF & size) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/classQskPushButton/#property-text)**  |
| QFont | **[font](/docs/classes/classQskPushButton/#property-font)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskPushButton/#property-textoptions)**  |
| QUrl | **[graphicSource](/docs/classes/classQskPushButton/#property-graphicsource)**  |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[graphic](/docs/classes/classQskPushButton/#property-graphic)**  |
| QSizeF | **[graphicSourceSize](/docs/classes/classQskPushButton/#property-graphicsourcesize)**  |
| bool | **[flat](/docs/classes/classQskPushButton/#property-flat)**  |
| QskCorner | **[corner](/docs/classes/classQskPushButton/#property-corner)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Text




### subcontrol Graphic




## Public Functions Documentation

### function QskPushButton

```cpp
QskPushButton(
    QQuickItem * parent =nullptr
)
```


### function QskPushButton

```cpp
QskPushButton(
    const QString & text,
    QQuickItem * parent =nullptr
)
```


### function ~QskPushButton

```cpp
~QskPushButton() override
```


### function setCorner

```cpp
void setCorner(
    const QskCorner & corner
)
```


### function corner

```cpp
QskCorner corner() const
```


### function text

```cpp
QString text() const
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & options
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function graphicSource

```cpp
QUrl graphicSource() const
```


### function graphicSourceSize

```cpp
QSizeF graphicSourceSize() const
```


### function graphic

```cpp
QskGraphic graphic() const
```


### function hasGraphic

```cpp
bool hasGraphic() const
```


### function resetGraphicSourceSize

```cpp
void resetGraphicSourceSize()
```


### function setFlat

```cpp
void setFlat(
    bool on
)
```


### function isFlat

```cpp
bool isFlat() const
```


### function font

```cpp
QFont font() const
```


### function layoutRectForSize

```cpp
QRectF layoutRectForSize(
    const QSizeF & size
) const override
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


### function loadGraphic

```cpp
virtual QskGraphic loadGraphic(
    const QUrl & url
) const
```


## Public Signals Documentation

### signal cornerChanged

```cpp
void cornerChanged()
```


### signal borderWidthChanged

```cpp
void borderWidthChanged()
```


### signal textChanged

```cpp
void textChanged()
```


### signal textOptionsChanged

```cpp
void textOptionsChanged()
```


### signal flatChanged

```cpp
void flatChanged()
```


### signal graphicChanged

```cpp
void graphicChanged()
```


### signal graphicSourceChanged

```cpp
void graphicSourceChanged()
```


### signal graphicSourceSizeChanged

```cpp
void graphicSourceSizeChanged()
```


## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
```


### slot setGraphicSource

```cpp
void setGraphicSource(
    const QUrl & url
)
```


### slot setGraphicSource

```cpp
void setGraphicSource(
    const QString & source
)
```


### slot setGraphic

```cpp
void setGraphic(
    const QskGraphic & graphic
)
```


### slot setGraphicSourceSize

```cpp
void setGraphicSourceSize(
    const QSizeF & size
)
```


## Public Property Documentation

### property text

```cpp
QString text;
```


### property font

```cpp
QFont font;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


### property graphicSource

```cpp
QUrl graphicSource;
```


### property graphic

```cpp
QskGraphic graphic;
```


### property graphicSourceSize

```cpp
QSizeF graphicSourceSize;
```


### property flat

```cpp
bool flat;
```


### property corner

```cpp
QskCorner corner;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET