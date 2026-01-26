---
type: method
interface: IView
member: IGetDesignTableExtent
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDesignTableExtent
  - IView.HasDesignTable
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
  - igetdesigntableextent
  - table
  - extent
  - double
---

# IView.IGetDesignTableExtent

Gets the size and location of the design table associated with this drawing view.

## Signature

```csharp
System.Double IGetDesignTableExtent()
```
## Parameters

None.

## Return Value

Array of 6 doubles; the lower left (x,y,z) and upper right (x,y,z) values indicating the design table extents; values are in meters and refer to drawing view space

## See Also

- `IView.GetDesignTableExtent`
- `IView.HasDesignTable`