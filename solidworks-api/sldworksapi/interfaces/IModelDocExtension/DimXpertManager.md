---
type: property
interface: IModelDocExtension
member: DimXpertManager
returns: DimXpertManager
parameters:
  -
    name: Configuration
    type: System.String
    description: Name of the configuration for which to retrieve the DimXpert schema
  -
    name: CreateSchema
    type: System.Boolean
    description: True to create DimXpert schema if it does not already exist; false otherwise
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - dimxpertmanager
  - imodeldocextension
  - model
  - doc
  - extension
  - dim
  - xpert
  - manager
  - configuration
  - string
  - create
  - schema
  - boolean
  - info
  - vba
  - vb
  - net
readonly: true
---

# IModelDocExtension.DimXpertManager

Gets the DimXpert schema for this configuration.

## Signature

```csharp
DimXpertManager DimXpertManager( 
   System.String
Configuration
,
   System.Boolean
CreateSchema
) {get;}
```
## Parameters

- `Configuration` (System.String): Name of the configuration for which to retrieve the DimXpert schema
- `CreateSchema` (System.Boolean): True to create DimXpert schema if it does not already exist; false otherwise

## Return Value

IDimXpertManager object

## Remarks

This interface retrieves the DimXpert schema information for opened parts which can be accessed in SOLIDWORKS via either the DimXpertManager tab of the Management Panel or the DimXpert tab of the CommandManager.

## Examples

- Get DimXpertManager Info (VBA) (Get_DimXpertManager_Info_Example_VB.htm)
- Get DimXpertManager Info (VB.NET) (Get_DimXpertManager_Info_Example_VBNET.htm)