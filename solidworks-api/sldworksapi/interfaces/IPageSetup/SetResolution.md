---
type: method
interface: IPageSetup
member: SetResolution
returns: System.Boolean
parameters:
  -
    name: UseDefault
    type: System.Boolean
    description: True to use the default printer resolution, false to set the printer resolution
  -
    name: DPI
    type: System.Int32
    description: Dots per inch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.GetResolution
keywords:
  - setresolution
  - ipagesetup
  - page
  - setup
  - resolution
  - use
  - default
  - boolean
  - dpi
  - int32
---

# IPageSetup.SetResolution

Sets the current printer resolution on documents and drawing sheets.

## Signature

```csharp
System.Boolean SetResolution( 
   System.Boolean
UseDefault
,
   System.Int32
DPI
)
```
## Parameters

- `UseDefault` (System.Boolean): True to use the default printer resolution, false to set the printer resolution
- `DPI` (System.Int32): Dots per inch

## Return Value

True if printer resolution is set, false if not

## Remarks

Specifying IPageSetup::SetResolution (false, 0) turns on the default resolution, which results in
IPageSetup::GetUseDefaultResolution
returning True.

## See Also

- `IPageSetup.GetResolution`