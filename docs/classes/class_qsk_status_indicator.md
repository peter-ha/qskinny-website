---
title: QskStatusIndicator
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setStatus](/docs/classes/class_qsk_status_indicator/#slot-setstatus)**(int status) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[statusChanged](/docs/classes/class_qsk_status_indicator/#signal-statuschanged)**(int status) |
| void | **[graphicRoleChanged](/docs/classes/class_qsk_status_indicator/#signal-graphicrolechanged)**(int ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskStatusIndicator](/docs/classes/class_qsk_status_indicator/#function-qskstatusindicator)**(QQuickItem * parent =nullptr) |
| | **[~QskStatusIndicator](/docs/classes/class_qsk_status_indicator/#function-~qskstatusindicator)**() override |
| Q_INVOKABLE QUrl | **[source](/docs/classes/class_qsk_status_indicator/#function-source)**(int status) const |
| Q_INVOKABLE void | **[setSource](/docs/classes/class_qsk_status_indicator/#function-setsource)**(int status, const QUrl & url) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[graphic](/docs/classes/class_qsk_status_indicator/#function-graphic)**(int status) const |
| void | **[setGraphic](/docs/classes/class_qsk_status_indicator/#function-setgraphic)**(int status, const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic) |
| void | **[setGraphicRole](/docs/classes/class_qsk_status_indicator/#function-setgraphicrole)**(int role) |
| void | **[resetGraphicRole](/docs/classes/class_qsk_status_indicator/#function-resetgraphicrole)**() |
| int | **[graphicRole](/docs/classes/class_qsk_status_indicator/#function-graphicrole)**() const |
| virtual QskColorFilter | **[graphicFilter](/docs/classes/class_qsk_status_indicator/#function-graphicfilter)**(int status) const |
| virtual [QskGraphic](/docs/classes/class_qsk_graphic/) | **[loadSource](/docs/classes/class_qsk_status_indicator/#function-loadsource)**(const QUrl & url) const |
| int | **[status](/docs/classes/class_qsk_status_indicator/#function-status)**() const |
| bool | **[hasStatus](/docs/classes/class_qsk_status_indicator/#function-hasstatus)**(int status) const |
| QList< int > | **[statusList](/docs/classes/class_qsk_status_indicator/#function-statuslist)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/class_qsk_status_indicator/#function-changeevent)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/class_qsk_status_indicator/#function-updatelayout)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| int | **[status](/docs/classes/class_qsk_status_indicator/#property-status)**  |
| int | **[graphicRole](/docs/classes/class_qsk_status_indicator/#property-graphicrole)**  |

## Public Slots Documentation

### slot setStatus

```cpp
void setStatus(
    int status
)
```


## Public Signals Documentation

### signal statusChanged

```cpp
void statusChanged(
    int status
)
```


### signal graphicRoleChanged

```cpp
void graphicRoleChanged(
    int 
)
```


## Public Functions Documentation

### function QskStatusIndicator

```cpp
QskStatusIndicator(
    QQuickItem * parent =nullptr
)
```


### function ~QskStatusIndicator

```cpp
~QskStatusIndicator() override
```


### function source

```cpp
Q_INVOKABLE QUrl source(
    int status
) const
```


### function setSource

```cpp
Q_INVOKABLE void setSource(
    int status,
    const QUrl & url
)
```


### function graphic

```cpp
QskGraphic graphic(
    int status
) const
```


### function setGraphic

```cpp
void setGraphic(
    int status,
    const QskGraphic & graphic
)
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


### function graphicFilter

```cpp
virtual QskColorFilter graphicFilter(
    int status
) const
```


### function loadSource

```cpp
virtual QskGraphic loadSource(
    const QUrl & url
) const
```


### function status

```cpp
int status() const
```


### function hasStatus

```cpp
bool hasStatus(
    int status
) const
```


### function statusList

```cpp
QList< int > statusList() const
```


## Protected Functions Documentation

### function changeEvent

```cpp
void changeEvent(
    QEvent * event
) override
```


### function updateLayout

```cpp
void updateLayout() override
```


## Public Property Documentation

### property status

```cpp
int status;
```


### property graphicRole

```cpp
int graphicRole;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET