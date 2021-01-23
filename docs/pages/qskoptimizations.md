---
title: Optimizations
layout: docs

---




The main optimizations found in QSkinny stem from the usage of C++ as a first-class citizen, allowing for "lighter" classes to be leveraged when building UIs. In QML, most types are backed by a corresponding QObject, or possibly multiple QObjects in order to deal with grouped properties and styling. QskControls, on the other hand, strive to encapsulate all functionality within a single QObject and delegate styling and other options to Q_GADGET classes and scene graph nodes.

Fewer QObjects leads to less memory consumption, generally fewer memory allocations, and better start-up times (especially when QML is avoided altogether).

Scene graph timing optimizations


The Qt Quick framework has a tendency to perform some operations too soon and too often, possibly leading to negative effects on performance or memory consumption. As some of these behaviors can be deferred at runtime, [QskControl](/docs/classes/class_qsk_control/) exposes a number of [flags](/docs/classes/class_qsk_quick_item/#enum-flag) (enabled by default) to avoid these issues.

More specifically, the following observations and associated actions have been made:

Delaying node creation

When calling QQuickItem::update(), the scene graph schedules a call to QQuickItem::updatePaintNode(), regardless of whether the item is visible. Naïve implementations tend to always update the node, resulting in possibly extra work (especially at start-up time). QSkinny defers the creation of this paint node by blocking the subsequent call to [QskSkinnable::updateNode](/docs/classes/class_qsk_skinnable/#function-updatenode) unless the item is visible. The behavior can be disabled via QskControl::DeferredUpdate.

Deferring polish

Similar to deferred updates (see above), calls to QQuickItem::polish are deferred until the item is visible and its geometry is known. The behavior is controlled by QskControl::DeferredPolish.

Deferring unnecessary re-layout

By default, the implicit approach to layouts found in QML can generate superfluous changes to the geometry of an item, especially during application start-up. The QskControl::DeferredLayout flag attempts to block most of these changes. When using QSkinny layouts, it is recommended to leave this flag enabled, but it may be necessary to disable it when working with standard QML layouts.

Deleting invisible nodes

The default scene graph does not implicitly delete nodes which become invisible. As this might result in a useful memory savings, QSkinny deletes, by default, nodes belonging to items which have been made invisible. To change this behavior, disable the QskControl::CleanupOnVisibility flag. 

-------------------------------

Updated on 23 January 2021 at 09:50:36 CET
