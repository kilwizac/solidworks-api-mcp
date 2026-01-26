---
type: method
interface: IModelDocExtension
member: SavePackAndGo
returns: System.Object
parameters:
  -
    name: PackAndGo
    type: PackAndGo
    description: Pack and Go object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related: []
keywords:
  - pack
  - go
  - save
  - savepackandgo
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - assembly
  - vb
  - net
  - vba
  - add
  - remove
  - files
---

# IModelDocExtension.SavePackAndGo

Saves the files designated for Pack and Go to either a folder or Zip file.

## Signature

```csharp
System.Object SavePackAndGo( 
   PackAndGo
PackAndGo
)
```
## Parameters

- `PackAndGo` (PackAndGo): Pack and Go object

## Return Value

Array of the status codes of Pack and Go as defined in swPackAndGoSaveStatus_e

## Remarks

After providing Pack and Go input, call this method to execute Pack and Go and end the Pack and Go session. A subsequent call to this method will fail without again providing Pack and Go input.

## Examples

- Pack and Go an Assembly (C#) (Pack_and_Go_an_Assembly_Example_CSharp.htm)
- Pack and Go an Assembly (VB.NET) (Pack_and_Go_an_Assembly_Example_VBNET.htm)
- Pack and Go an Assembly (VBA) (Pack_and_Go_an_Assembly_Example_VB.htm)
- Add and Remove Files from Pack and Go (C#) (Add_and_Remove_Files_from_Pack_and_Go_Example_CSharp.htm)
- Add and Remove Files from Pack and Go (VB.NET) (Add_and_Remove_Files_from_Pack_and_Go_Example_VBNET.htm)
- Add and Remove Files from Pack and Go (VBA) (Add_and_Remove_Files_from_Pack_and_Go_Example_VB.htm)