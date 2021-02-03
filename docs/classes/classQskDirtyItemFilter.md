---
title: QskDirtyItemFilter
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskDirtyItemFilter](/docs/classes/classQskDirtyItemFilter/#function-qskdirtyitemfilter)**(QObject * parent =nullptr) |
| | **[~QskDirtyItemFilter](/docs/classes/classQskDirtyItemFilter/#function-~qskdirtyitemfilter)**() override |
| void | **[addWindow](/docs/classes/classQskDirtyItemFilter/#function-addwindow)**(QQuickWindow * window) |
| void | **[filterDirtyList](/docs/classes/classQskDirtyItemFilter/#function-filterdirtylist)**(QQuickWindow * window, bool(*)(const QQuickItem *) isBlocked) |

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

Updated on  3 February 2021 at 15:05:42 CET