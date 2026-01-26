---
type: method
interface: IDisplayDimension
member: SetBrokenLeader2
returns: System.Int32
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document default setting, false uses the setting specified in the Broken argument
  -
    name: Broken
    type: System.Int32
    description: Broken leader value as defined in swDisplayDimensionLeaderText_e if UseDoc is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetUseDocBrokenLeader
  - IDisplayDimension.SolidLeader
keywords:
  - leaders
  - dimensions
  - setbrokenleader2
  - idisplaydimension
  - display
  - dimension
  - broken
  - leader2
  - use
  - doc
  - boolean
  - int32
---

# IDisplayDimension.SetBrokenLeader2

Sets the broken leader display characteristic of this display dimension.

## Signature

```csharp
System.Int32 SetBrokenLeader2( 
   System.Boolean
UseDoc
,
   System.Int32
Broken
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document default setting, false uses the setting specified in the Broken argument
- `Broken` (System.Int32): Broken leader value as defined in swDisplayDimensionLeaderText_e if UseDoc is false

## Return Value

Return status: -1 Command failed, no broken leader values were set 0 Command was successful, all precision values were set 1 Specified broken value is invalid, the display dimension was set to use the document default

## Remarks

Dimension text can be displayed above a solid, unbroken leader line, or broken with the text displayed horizontally or aligned with the leader line. This method allows you to determine if this
IDisplayDimension
uses the default document setting for this value or if the user has applied a specific setting.
If UseDoc is True, then SOLIDWORKS ignores the broken value.
The return value indicates the success or failure of this method. In general, a value less than 0 indicates that the command failed, and no broken leader values were set. A value of 0 indicates success.
Use
IDisplayDimension::GetUseDocBrokenLeader
and
IDisplayDimension::GetBrokenLeader2
to get these values.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.GetUseDocBrokenLeader`
- `IDisplayDimension.SolidLeader`