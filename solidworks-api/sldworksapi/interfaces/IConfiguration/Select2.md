---
type: method
interface: IConfiguration
member: Select2
returns: System.Boolean
parameters:
  -
    name: AppendFlag
    type: System.Boolean
    description: True appends the configuration to the selection list, false replaces the selection list with the configuration
  -
    name: SelectData
    type: SelectData
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - select2
  - iconfiguration
  - configuration
  - append
  - flag
  - boolean
  - select
  - data
  - add
  - derived
  - configurations
  - vba
  - vb
  - net
---

# IConfiguration.Select2

Selects the configuration.

## Signature

```csharp
System.Boolean Select2( 
   System.Boolean
AppendFlag
,
   SelectData
SelectData
)
```
## Parameters

- `AppendFlag` (System.Boolean): True appends the configuration to the selection list, false replaces the selection list with the configuration
- `SelectData` (SelectData): Pointer to the ISelectData object

## Return Value

True if the configuration is selected, false if not

## Examples

- Add Derived Configurations (VBA) (Add_Derived_Configurations_Example_VB.htm)
- Add Derived Configurations (VB.NET) (Add_Derived_Configurations_Example_VBNET.htm)
- Add Derived Configurations (C#) (Add_Derived_Configurations_Example_CSharp.htm)