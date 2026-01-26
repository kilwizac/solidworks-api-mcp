---
type: method
interface: IDisplayStateSetting
member: IGetNames
returns: System.String
parameters:
  -
    name: DsNameCount
    type: System.Int32
    description: Number of display state names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.ISetNames
  - IDisplayStateSetting.Names
keywords:
  - igetnames
  - idisplaystatesetting
  - display
  - state
  - setting
  - names
  - ds
  - name
  - count
  - int32
  - string
---

# IDisplayStateSetting.IGetNames

Gets the display state names for this display state setting.

## Signature

```csharp
System.String IGetNames( 
   System.Int32
DsNameCount
)
```
## Parameters

- `DsNameCount` (System.Int32): Number of display state names

## Return Value

in-process, unmanaged C++: Pointer to an array display state names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IDisplayStateSetting::GetNameCount
to populate DsNameCount.

## See Also

- `IDisplayStateSetting.ISetNames`
- `IDisplayStateSetting.Names`