---
title: QskStatusIndicator
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Graphic](/docs/classes/classQskStatusIndicator/#subcontrol-graphic)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskStatusIndicator](/docs/classes/classQskStatusIndicator/#function-qskstatusindicator)**(QQuickItem * parent =nullptr) |
| | **[~QskStatusIndicator](/docs/classes/classQskStatusIndicator/#function-~qskstatusindicator)**() override |
| Q_INVOKABLE QUrl | **[source](/docs/classes/classQskStatusIndicator/#function-source)**(int status) const |
| Q_INVOKABLE void | **[setSource](/docs/classes/classQskStatusIndicator/#function-setsource)**(int status, const QUrl & url) |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[graphic](/docs/classes/classQskStatusIndicator/#function-graphic)**(int status) const |
| void | **[setGraphic](/docs/classes/classQskStatusIndicator/#function-setgraphic)**(int status, const [QskGraphic](/docs/classes/classQskGraphic/) & graphic) |
| void | **[setGraphicRole](/docs/classes/classQskStatusIndicator/#function-setgraphicrole)**(int role) |
| void | **[resetGraphicRole](/docs/classes/classQskStatusIndicator/#function-resetgraphicrole)**() |
| int | **[graphicRole](/docs/classes/classQskStatusIndicator/#function-graphicrole)**() const |
| virtual QskColorFilter | **[graphicFilter](/docs/classes/classQskStatusIndicator/#function-graphicfilter)**(int status) const |
| virtual [QskGraphic](/docs/classes/classQskGraphic/) | **[loadSource](/docs/classes/classQskStatusIndicator/#function-loadsource)**(const QUrl & url) const |
| int | **[status](/docs/classes/classQskStatusIndicator/#function-status)**() const |
| bool | **[hasStatus](/docs/classes/classQskStatusIndicator/#function-hasstatus)**(int status) const |
| QList< int > | **[statusList](/docs/classes/classQskStatusIndicator/#function-statuslist)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/classQskStatusIndicator/#function-changeevent)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/classQskStatusIndicator/#function-updatelayout)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[statusChanged](/docs/classes/classQskStatusIndicator/#signal-statuschanged)**(int status) |
| void | **[graphicRoleChanged](/docs/classes/classQskStatusIndicator/#signal-graphicrolechanged)**(int ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setStatus](/docs/classes/classQskStatusIndicator/#slot-setstatus)**(int status) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| int | **[status](/docs/classes/classQskStatusIndicator/#property-status)**  |
| statusChanged int | **[graphicRole](/docs/classes/classQskStatusIndicator/#property-graphicrole)**  |

## Public Subcontrols Documentation

### subcontrol Graphic




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


## Public Slots Documentation

### slot setStatus

```cpp
void setStatus(
    int status
)
```


## Public Property Documentation

### property status

```cpp
int status;
```


### property graphicRole

```cpp
statusChanged int graphicRole;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET