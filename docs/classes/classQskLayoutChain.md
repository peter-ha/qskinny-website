---
title: QskLayoutChain
layout: docs

---


**Module:** **[Layouts](/docs/modules/group__Layouts/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FillMode](/docs/classes/classQskLayoutChain/#enum-fillmode)** { Leading = 1 << 0, Trailing = 1 << 1} |
| typedef QVector< Segment > | **[Segments](/docs/classes/classQskLayoutChain/#typedef-segments)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskLayoutChain](/docs/classes/classQskLayoutChain/#function-qsklayoutchain)**() |
| | **[~QskLayoutChain](/docs/classes/classQskLayoutChain/#function-~qsklayoutchain)**() |
| void | **[invalidate](/docs/classes/classQskLayoutChain/#function-invalidate)**() |
| void | **[reset](/docs/classes/classQskLayoutChain/#function-reset)**(int count, qreal constraint) |
| void | **[expandCell](/docs/classes/classQskLayoutChain/#function-expandcell)**(int index, const CellData & newCell) |
| void | **[expandCells](/docs/classes/classQskLayoutChain/#function-expandcells)**(int start, int end, const CellData & multiCell) |
| void | **[shrinkCell](/docs/classes/classQskLayoutChain/#function-shrinkcell)**(int index, const CellData & newCell) |
| void | **[finish](/docs/classes/classQskLayoutChain/#function-finish)**() |
| const CellData & | **[cell](/docs/classes/classQskLayoutChain/#function-cell)**(int index) const |
| bool | **[setSpacing](/docs/classes/classQskLayoutChain/#function-setspacing)**(qreal spacing) |
| qreal | **[spacing](/docs/classes/classQskLayoutChain/#function-spacing)**() const |
| void | **[setFillMode](/docs/classes/classQskLayoutChain/#function-setfillmode)**(int mode) |
| int | **[fillMode](/docs/classes/classQskLayoutChain/#function-fillmode)**() const |
| Segments | **[segments](/docs/classes/classQskLayoutChain/#function-segments)**(qreal size) const |
| QskLayoutHint | **[boundingHint](/docs/classes/classQskLayoutChain/#function-boundinghint)**() const |
| qreal | **[constraint](/docs/classes/classQskLayoutChain/#function-constraint)**() const |
| int | **[count](/docs/classes/classQskLayoutChain/#function-count)**() const |

## Public Types Documentation

### enum FillMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Leading | 1 << 0|   |
| Trailing | 1 << 1|   |




### typedef Segments

```cpp
typedef QVector< Segment > QskLayoutChain::Segments;
```


## Public Functions Documentation

### function QskLayoutChain

```cpp
QskLayoutChain()
```


### function ~QskLayoutChain

```cpp
~QskLayoutChain()
```


### function invalidate

```cpp
void invalidate()
```


### function reset

```cpp
void reset(
    int count,
    qreal constraint
)
```


### function expandCell

```cpp
void expandCell(
    int index,
    const CellData & newCell
)
```


### function expandCells

```cpp
void expandCells(
    int start,
    int end,
    const CellData & multiCell
)
```


### function shrinkCell

```cpp
void shrinkCell(
    int index,
    const CellData & newCell
)
```


### function finish

```cpp
void finish()
```


### function cell

```cpp
inline const CellData & cell(
    int index
) const
```


### function setSpacing

```cpp
bool setSpacing(
    qreal spacing
)
```


### function spacing

```cpp
inline qreal spacing() const
```


### function setFillMode

```cpp
inline void setFillMode(
    int mode
)
```


### function fillMode

```cpp
inline int fillMode() const
```


### function segments

```cpp
Segments segments(
    qreal size
) const
```


### function boundingHint

```cpp
inline QskLayoutHint boundingHint() const
```


### function constraint

```cpp
inline qreal constraint() const
```


### function count

```cpp
inline int count() const
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET