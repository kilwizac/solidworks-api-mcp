---
type: method
interface: IFamilyTableFeature
member: GetTableAnnotations
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related: []
keywords:
  - gettableannotations
  - ifamilytablefeature
  - family
  - table
  - feature
  - annotations
  - object
---

# IFamilyTableFeature.GetTableAnnotations

Gets the annotations for this family table feature.

## Signature

```csharp
System.Object GetTableAnnotations()
```
## Parameters

None.

## Return Value

Array of IFamilyTableAnnotation s

## Remarks

Use
IFamilyTableFeature::GetTableAnnotationCount
to determine the size of the array returned by this method.