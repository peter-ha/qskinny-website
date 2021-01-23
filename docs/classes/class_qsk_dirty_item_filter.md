---
title: QskDirtyItemFilter
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDirtyItemFilter](/docs/classes/class_qsk_dirty_item_filter/#function-qskdirtyitemfilter)**(QObject * parent =nullptr) |
| | **[~QskDirtyItemFilter](/docs/classes/class_qsk_dirty_item_filter/#function-~qskdirtyitemfilter)**() override |
| void | **[addWindow](/docs/classes/class_qsk_dirty_item_filter/#function-addwindow)**(QQuickWindow * window) |
| void | **[filterDirtyList](/docs/classes/class_qsk_dirty_item_filter/#function-filterdirtylist)**(QQuickWindow * window, bool(*)(const QQuickItem *) isBlocked) |

## Public Functions Documentation

### function QskDirtyItemFilter

```cpp
QskDirtyItemFilter(
    QObject * parent =nullptr
)
```


### function ~QskDirtyItemFilter

```cpp
~QskDirtyItemFilter() override
```


### function addWindow

```cpp
void addWindow(
    QQuickWindow * window
)
```


### function filterDirtyList

```cpp
static void filterDirtyList(
    QQuickWindow * window,
    bool(*)(const QQuickItem *) isBlocked
)
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET