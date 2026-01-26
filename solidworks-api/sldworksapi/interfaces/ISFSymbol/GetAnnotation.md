---
type: method
interface: ISFSymbol
member: GetAnnotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.IGetAnnotation
keywords:
  - getannotation
  - isfsymbol
  - isf
  - symbol
  - annotation
  - object
  - vba
  - vb
  - net
---

# ISFSymbol.GetAnnotation

Gets the annotation for this surface finish symbol.

## Signature

```csharp
System.Object GetAnnotation()
```
## Parameters

None.

## Return Value

Annotation

## Remarks

This method gets the owning
IAnnotation
object, which is a higher-level object that contains methods that are general to all types of annotations.

## Examples

- Get Annotation Object (VBA) (Get_Annotation_Object_Example_VB.htm)
- Get Annotation Object (VB.NET) (Get_Annotation_Object_Example_VBNET.htm)
- Get Annotation Object (C#) (Get_Annotation_Object_Example_CSharp.htm)

## See Also

- `ISFSymbol.IGetAnnotation`