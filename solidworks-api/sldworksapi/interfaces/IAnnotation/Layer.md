---
type: property
interface: IAnnotation
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - layer
  - iannotation
  - annotation
  - string
  - insert
  - autoballoons
  - vba
readonly: null
---

# IAnnotation.Layer

Gets or sets the layer used by this annotation. Layers are supported only in SOLIDWORKS drawings.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Name of the layer used for this annotation

## Remarks

In Drawing documents, annotations can be created on a specific layer. This property allows you to get or set the layer used by this annotation. You can also set an annotation to not be on any layer by specifying "" for theLayer.
NOTE:
The return value might be an empty string because an old document might not contain layers. This also occurs if annotations have been generated in a new document that does not have layers defined.

## Examples

- Insert Autoballoons (VBA) (Insert_Autoballoons_Example_VB_AutoBalloon2_VB.htm)