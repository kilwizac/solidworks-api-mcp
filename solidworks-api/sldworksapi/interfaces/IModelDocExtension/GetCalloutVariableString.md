---
type: method
interface: IModelDocExtension
member: GetCalloutVariableString
returns: System.String
parameters:
  -
    name: Variable
    type: System.Int32
    description: Callout variable as defined in swCalloutVariable_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IAdvancedHoleElementData.CalloutString
keywords:
  - getcalloutvariablestring
  - imodeldocextension
  - model
  - doc
  - extension
  - callout
  - variable
  - string
  - int32
  - create
  - advanced
  - hole
  - vba
  - vb
  - net
---

# IModelDocExtension.GetCalloutVariableString

Gets the string for the specified callout variable.

## Signature

```csharp
System.String GetCalloutVariableString( 
   System.Int32
Variable
)
```
## Parameters

- `Variable` (System.Int32): Callout variable as defined in swCalloutVariable_e

## Return Value

Callout variable string

## Examples

- Create Advanced Hole (VBA) (Create_Advanced_Hole_Example_VB.htm)
- Create Advanced Hole (VB.NET) (Create_Advanced_Hole_Example_VBNET.htm)
- Create Advanced Hole (C#) (Create_Advanced_Hole_Example_CSharp.htm)

## See Also

- `IAdvancedHoleElementData.CalloutString`