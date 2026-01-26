---
type: method
interface: IRevisionCloud
member: GetNext
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IView.GetRevisionClouds
keywords:
  - getnext
  - irevisioncloud
  - revision
  - cloud
  - next
  - object
---

# IRevisionCloud.GetNext

Gets the next revision cloud in a drawing view or sheet.

## Signature

```csharp
System.Object GetNext()
```
## Parameters

None.

## Return Value

IRevisionCloud

## Remarks

You can traverse the revision cloud annotations in a drawing view as follows:
Call
IView::GetFirstRevisionCloud
to get the first revision cloud.
Call this method
IView::GetRevisionCloudCount
times to access the other revision clouds.

## See Also

- `IView.GetRevisionClouds`