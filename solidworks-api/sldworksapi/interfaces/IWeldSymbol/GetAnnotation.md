---
type: method
interface: IWeldSymbol
member: GetAnnotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.IGetAnnotation
keywords:
  - getannotation
  - iweldsymbol
  - weld
  - symbol
  - annotation
  - object
  - vba
  - vb
  - net
---

# IWeldSymbol.GetAnnotation

Gets the annotation for this weld symbol.

## Signature

```csharp
System.Object GetAnnotation()
```
## Parameters

None.

## Return Value

Annotation

## Remarks

This method obtains the owning
IAnnotation
object, which is a higher-level object that contains methods that are general to all types of annotations.

## Examples

- Get Annotation Object (VBA) (Get_Annotation_Object_Example_VB.htm)
- Get Annotation Object (VB.NET) (Get_Annotation_Object_Example_VBNET.htm)
- Get Annotation Object (C#) (Get_Annotation_Object_Example_CSharp.htm)

## See Also

- `IWeldSymbol.IGetAnnotation`