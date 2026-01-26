---
type: property
interface: IRevisionTableAnnotation
member: CurrentRevision
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.DeleteRevision
  - IRevisionTableAnnotation.GetIdForRowNumber
  - IRevisionTableAnnotation.GetRevisionForId
  - IRevisionTableAnnotation.GetRowNumberForId
keywords:
  - currentrevision
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - current
  - string
readonly: true
---

# IRevisionTableAnnotation.CurrentRevision

Gets the latest revision of this revision table annotation.

## Signature

```csharp
System.String CurrentRevision {get;}
```
## Parameters

None.

## Return Value

Latest revision

## Remarks

Use
IRevisionTableAnnotation::AddRevision
to add a revision and get its revision ID.

## Examples

- IRevisionTableAnnotation (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRevisionTableAnnotation)

## See Also

- `IRevisionTableAnnotation.DeleteRevision`
- `IRevisionTableAnnotation.GetIdForRowNumber`
- `IRevisionTableAnnotation.GetRevisionForId`
- `IRevisionTableAnnotation.GetRowNumberForId`