---
type: property
interface: IConfiguration
member: DimXpertManager
returns: DimXpertManager
parameters:
  -
    name: CreateSchema
    type: System.Boolean
    description: True to create DimXpert schema if it does not already exist; false otherwise
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - dimxpertmanager
  - iconfiguration
  - configuration
  - dim
  - xpert
  - manager
  - create
  - schema
  - boolean
  - info
  - vba
  - vb
  - net
readonly: true
---

# IConfiguration.DimXpertManager

Gets the DimXpert schema for this configuration.

## Signature

```csharp
DimXpertManager DimXpertManager( 
   System.Boolean
CreateSchema
) {get;}
```
## Parameters

- `CreateSchema` (System.Boolean): True to create DimXpert schema if it does not already exist; false otherwise

## Return Value

Pointer to IDimXpertManager object

## Remarks

This interface retrieves the DimXpert schema information for opened parts which can be accessed in SOLIDWORKS via either the DimXpertManager tab of the Management Panel or the DimXpert tab of the CommandManager.

## Examples

- Get DimXpertManager Info (VBA) (Get_DimXpertManager_Info_Example_VB.htm)
- Get DimXpertManager Info (VB.NET) (Get_DimXpertManager_Info_Example_VBNET.htm)