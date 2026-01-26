---
type: method
interface: IView
member: IGetRevisionClouds
returns: RevisionCloud
parameters:
  -
    name: NumRevClouds
    type: System.Int32
    description: Number of revision cloud annotations in this view (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetFirstRevisionCloud
  - IView.GetRevisionClouds
  - IView.IGetFirstRevisionCloud
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - revision
  - clouds
  - irevisioncloud
  - view
  - igetrevisionclouds
  - num
  - rev
  - int32
  - cloud
---

# IView.IGetRevisionClouds

Gets all of the revision cloud annotations in this view.

## Signature

```csharp
RevisionCloud IGetRevisionClouds( 
   System.Int32
NumRevClouds
)
```
## Parameters

- `NumRevClouds` (System.Int32): Number of revision cloud annotations in this view (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of revision cloud annotation s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IView::GetRevisionCloudCount
to populate NumRevClouds.

## See Also

- `IView.GetFirstRevisionCloud`
- `IView.GetRevisionClouds`
- `IView.IGetFirstRevisionCloud`