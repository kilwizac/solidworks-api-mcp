---
type: method
interface: IRevisionCloud
member: IGetNext
returns: RevisionCloud
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IView.IGetRevisionClouds
keywords:
  - igetnext
  - irevisioncloud
  - revision
  - cloud
  - next
---

# IRevisionCloud.IGetNext

Gets the next revision cloud in a drawing view or sheet.

## Signature

```csharp
RevisionCloud IGetNext()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an IRevisionCloud VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

You can traverse the revision cloud annotations in a drawing view as follows:
Call
IView::IGetFirstRevisionCloud
to get the first revision cloud.
Call this method
IView::GetRevisionCloudCount
times to access the other revision clouds.

## See Also

- `IView.IGetRevisionClouds`