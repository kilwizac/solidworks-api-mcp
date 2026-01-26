---
type: method
interface: IRevisionTableFeature
member: GetTableAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related:
  - IRevisionTableFeature.GetTableAnnotations
keywords:
  - gettableannotationcount
  - irevisiontablefeature
  - revision
  - table
  - feature
  - annotation
  - count
  - int32
---

# IRevisionTableFeature.GetTableAnnotationCount

Gets the number of revision table annotations for this revision table.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of revision table annotations

## Remarks

Call this method before calling
IRevisionTableFeature::IGetTableAnnotations
to get the size of the array for that method.

## Examples

- IRevisionTableFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRevisionTableFeature)

## See Also

- `IRevisionTableFeature.GetTableAnnotations`