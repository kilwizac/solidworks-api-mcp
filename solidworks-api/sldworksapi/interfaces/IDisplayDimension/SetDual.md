---
type: method
interface: IDisplayDimension
member: SetDual
returns: void
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting, false uses the opposite of the document setting (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.Split
keywords:
  - setdual
  - idisplaydimension
  - display
  - dimension
  - dual
  - use
  - doc
  - boolean
  - void
---

# IDisplayDimension.SetDual

Obsolete. Superseded by IDisplayDimension::SetDual2.

## Signature

```csharp
void SetDual( 
   System.Boolean
UseDoc
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting, false uses the opposite of the document setting (see Remarks )

## Return Value

Unknown.

## Remarks

Dual dimensions can use either the same top, bottom, right, or left setting as the document or an opposite top, bottom, right, or left setting. This method allows you to set a dual dimension to use the current document setting or the opposite setting.
Use
IDisplayDimension::GetUseDocDual
to get the current value of this setting.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.Split`