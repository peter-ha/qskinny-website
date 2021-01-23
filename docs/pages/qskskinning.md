---
title: Skinning
layout: docs

---




Controls in QSkinny are designed from the ground up to be skinnable (that is, easily styled/themed). QSkinny includes both a high-level API consisting of _skin__hints_ (QskSkinHint) and a low-level API based on C++ delegates, or _skinlets_ ([QskSkinlet](/docs/classes/class_qsk_skinlet/)). In fact, the two approaches are used in tandem to provide custom _skins_ (QskSkin) to applications.

Inspired by CSS, skin hints consist of basic types (e.g. colors or distances) which are used to describe the rendering of a user interface (i.e., _skinnable_ - [QskSkinnable](/docs/classes/class_qsk_skinnable/) - components). The particular element of the UI affected by this skin hint is described by an _aspect_ (QskAspect). Not unlike CSS selectors, aspects are created by combining a series of flags together. This combination of flags (called an aspect) determines the rendering scope to which the skin hint applies.

More concretely, modifying the look & feel of QskControls can be acheived by:

* (Basic) Calling QskSkin::setSkinHint (or the more specific methods QskSkin::setRgb or QskSkin::setMetric). Setting a value for a given aspect will change the rendering of that aspect for all skinlets which use it.
* (Basic) Calling QskSkinnable::setSkinHint on a [skinnable](/docs/classes/class_qsk_skinnable/), typically a [control](/docs/classes/class_qsk_control/).
* (Advanced) Subclassing QskSkin and registering a custom skinlet with QskSkin::declareSkinlet. The custom skinlet can be used to change the C++ drawing routines via overridden method calls.
* (Advanced) Subclassing a [QskSkinlet](/docs/classes/class_qsk_skinlet/) and calling [QskSkinnable::setSkinlet](/docs/classes/class_qsk_skinnable/#function-setskinlet) directly on a given skinnable. This allows changing the drawing routines for a specific control instance rather than every control instance in the application.
The default skin in QSkinny is intended to be flexible enough that the most common visual changes can be acheived without subclassing [QskSkinlet](/docs/classes/class_qsk_skinlet/). That is, they can be styled entirely by setting skin hints for aspects used by the built-in skinlets. For more information about how aspects are used to control rendering in the built-in skinlets, see QskAspect. 

-------------------------------

Updated on 23 January 2021 at 09:50:36 CET