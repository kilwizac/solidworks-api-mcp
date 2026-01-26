---
type: method
interface: IAnnotationView
member: MoveAnnotations
returns: System.Boolean
parameters:
  -
    name: AnnotationsToMove
    type: System.Object
    description: Annotations to move
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related: []
keywords:
  - moveannotations
  - iannotationview
  - annotation
  - view
  - move
  - annotations
  - object
  - boolean
  - notes
  - area
  - vb
  - net
  - vba
---

# IAnnotationView.MoveAnnotations

Moves the specified annotations to this annotation view.

## Signature

```csharp
System.Boolean MoveAnnotations( 
   System.Object
AnnotationsToMove
)
```
## Parameters

- `AnnotationsToMove` (System.Object): Annotations to move

## Return Value

True if the specified annotations are moved, false if not

## Examples

- Move Annotations to Notes Area Annotation View (C#) (Move_Annotations_to_First_Annotation_View_Example_CSharp.htm)
- Move Annotations to Notes Area Annotation View (VB.NET) (Move_Annotations_to_First_Annotation_View_Example_VBNET.htm)
- Move Annotations to Notes Area Annotation View (VBA) (Move_Annotations_to_First_Annotation_View_Example_VB.htm)