---
type: method
interface: IModelDocExtension
member: InsertAnnotationView
returns: AnnotationView
parameters:
  -
    name: AnnotationViewingDirection
    type: System.Int32
    description: Defined by either any swStandardViews_e enumerator or 0 for selection
  -
    name: DirectionReference
    type: System.Object
    description: If 0 specified for AnnotationViewingDirection, then specifiy a face or plane to define the direction of the annotation view
  -
    name: FlipDirection
    type: System.Boolean
    description: True to flip the annotation view in the opposite direction, false to not
  -
    name: HorizontalDirectionReference
    type: System.Object
    description: An edge , sketch , or face
  -
    name: AngleMadeWithHorizontal
    type: System.Int32
    description: Angle (in degrees) with the specified HorizontalDirectionReference
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related: []
keywords:
  - insertannotationview
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - annotation
  - view
  - viewing
  - direction
  - int32
  - reference
  - object
  - flip
  - boolean
  - horizontal
  - angle
  - made
---

# IModelDocExtension.InsertAnnotationView

Inserts an annotation view in this part or assembly document.

## Signature

```csharp
AnnotationView InsertAnnotationView( 
   System.Int32
AnnotationViewingDirection
,
   System.Object
DirectionReference
,
   System.Boolean
FlipDirection
,
   System.Object
HorizontalDirectionReference
,
   System.Int32
AngleMadeWithHorizontal
)
```
## Parameters

- `AnnotationViewingDirection` (System.Int32): Defined by either any swStandardViews_e enumerator or 0 for selection
- `DirectionReference` (System.Object): If 0 specified for AnnotationViewingDirection, then specifiy a face or plane to define the direction of the annotation view
- `FlipDirection` (System.Boolean): True to flip the annotation view in the opposite direction, false to not
- `HorizontalDirectionReference` (System.Object): An edge , sketch , or face
- `AngleMadeWithHorizontal` (System.Int32): Angle (in degrees) with the specified HorizontalDirectionReference

## Return Value

Newly inserted annotation view