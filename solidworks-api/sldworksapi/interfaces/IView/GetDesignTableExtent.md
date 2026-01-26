---
type: method
interface: IView
member: GetDesignTableExtent
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.HasDesignTable
  - IView.IGetDesignTableExtent
keywords:
  - design
  - tables
  - see
  - also
  - idesigntable
  - drawing
  - views
  - iview
  - view
  - getdesigntableextent
  - table
  - extent
  - object
---

# IView.GetDesignTableExtent

Gets the size and location of the design table associated with this drawing view.

## Signature

```csharp
System.Object GetDesignTableExtent()
```
## Parameters

None.

## Return Value

Array of 6 doubles; the lower left (x,y,z) and upper right (x,y,z) values indicating the design table extents; values are in meters and refer to drawing view space

## See Also

- `IView.HasDesignTable`
- `IView.IGetDesignTableExtent`