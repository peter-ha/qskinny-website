---
title: QskBoxRenderer::Metrics
layout: docs

---




## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Corner](/docs/classes/struct_qsk_box_renderer_1_1_metrics_1_1_corner/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Metrics](/docs/classes/class_qsk_box_renderer_1_1_metrics/#function-metrics)**(const QRectF & rect, const QskBoxShapeMetrics & shape, const QskBoxBorderMetrics & border) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| Quad | **[outerQuad](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-outerquad)**  |
| Quad | **[innerQuad](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-innerquad)**  |
| Quad | **[centerQuad](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-centerquad)**  |
| struct QskBoxRenderer::Metrics::Corner | **[corner](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-corner)**  |
| bool | **[isBorderRegular](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-isborderregular)**  |
| bool | **[isRadiusRegular](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-isradiusregular)**  |
| bool | **[isTotallyCropped](/docs/classes/class_qsk_box_renderer_1_1_metrics/#variable-istotallycropped)**  |

## Public Functions Documentation

### function Metrics

```cpp
Metrics(
    const QRectF & rect,
    const QskBoxShapeMetrics & shape,
    const QskBoxBorderMetrics & border
)
```


## Public Attributes Documentation

### variable outerQuad

```cpp
Quad outerQuad;
```


### variable innerQuad

```cpp
Quad innerQuad;
```


### variable centerQuad

```cpp
Quad centerQuad;
```


### variable corner

```cpp
struct QskBoxRenderer::Metrics::Corner corner;
```


### variable isBorderRegular

```cpp
bool isBorderRegular;
```


### variable isRadiusRegular

```cpp
bool isRadiusRegular;
```


### variable isTotallyCropped

```cpp
bool isTotallyCropped;
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET