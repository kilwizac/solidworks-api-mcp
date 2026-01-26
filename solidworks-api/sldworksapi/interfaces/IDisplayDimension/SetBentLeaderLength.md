---
type: method
interface: IDisplayDimension
member: SetBentLeaderLength
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document default setting for dimension bent leader, false to use the length argument for the bent leader length
  -
    name: Length
    type: System.Double
    description: Length of the bent leader in system units
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - leaders
  - dimensions
  - setbentleaderlength
  - idisplaydimension
  - display
  - dimension
  - bent
  - leader
  - length
  - use
  - doc
  - boolean
  - double
---

# IDisplayDimension.SetBentLeaderLength

Sets the bent leader length to use for this dimension.

## Signature

```csharp
System.Boolean SetBentLeaderLength( 
   System.Boolean
UseDoc
,
   System.Double
Length
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the document default setting for dimension bent leader, false to use the length argument for the bent leader length
- `Length` (System.Double): Length of the bent leader in system units

## Return Value

True if the bent leader length is set, false if not

## Remarks

The dimension bent leader length only applies to these types of dimensions: radial and linear. If this method is used on any other type of dimension, no action is taken, and the return value is false.
Use:
IDisplayDimension::GetUseDocBentLeaderLength
to determine whether this dimension is using the document default setting for dimension bent leader length or not.
IDisplayDimension::GetBentLeaderLength
to determine the bent leader length for this dimension.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.