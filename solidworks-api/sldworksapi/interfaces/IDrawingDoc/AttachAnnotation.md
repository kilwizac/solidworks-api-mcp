---
type: method
interface: IDrawingDoc
member: AttachAnnotation
returns: System.Boolean
parameters:
  -
    name: Option
    type: System.Int32
    description: Annotation attachment option as defined in swAttachAnnotationOption_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related:
  - IDrawingDoc.InsertModelAnnotations3
keywords:
  - attach
  - annotations
  - drawings
  - see
  - also
  - idrawingdoc
  - annotation
  - iannotation
  - drawing
  - views
  - attachannotation
  - doc
  - option
  - int32
  - boolean
  - vba
  - vb
  - net
---

# IDrawingDoc.AttachAnnotation

Attaches an existing annotation to a drawing sheet or view.

## Signature

```csharp
System.Boolean AttachAnnotation( 
   System.Int32
Option
)
```
## Parameters

- `Option` (System.Int32): Annotation attachment option as defined in swAttachAnnotationOption_e

## Return Value

True if attachment is successful, false if not

## Remarks

To attach an annotation to a drawing view:
Multi-select the annotation and drawing view.
Call this method with Option set to swAttachAnnotationOption_e.swAttachAnnotationOption_View.
To attach an annotation to a drawing sheet:
Select the annotation.
Call this method with Option set to swAttachAnnotationOption_e.swAttachAnnotationOption_Sheet.

## Examples

- Attach Annotation (VBA) (Attach_Annotation_Example_VB.htm)
- Attach Annotation (VB.NET) (Attach_Annotation_Example_VBNET.htm)
- Attach Annotation (C#) (Attach_Annotation_Example_CSharp.htm)

## See Also

- `IDrawingDoc.InsertModelAnnotations3`