---
type: method
interface: ISldWorks
member: UnloadAddIn
returns: System.Int32
parameters:
  -
    name: FileName
    type: System.String
    description: Fully qualified file name of the add-in
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.LoadAddIn
keywords:
  - unload
  - add
  - ins
  - photoview
  - 360
  - unloadaddin
  - isldworks
  - sld
  - works
  - file
  - name
  - string
  - int32
  - load
  - vb
  - net
  - vba
---

# ISldWorks.UnloadAddIn

Unloads the specified add-in from SOLIDWORKS.

## Signature

```csharp
System.Int32 UnloadAddIn( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Fully qualified file name of the add-in

## Return Value

Status of unloading the add-in: 0: Successfully unloaded the add-in -1: Failed to unload the add-in due to some error condition

## Remarks

You cannot unload MBD using its add-in path. Instead, unload the MBD add-in as follows:
status = swApp.
UnloadAddIn
('MBD')

## Examples

- Load and Unload Add-in (C#) (Load_and_Unload_Add-in_Example_CSharp.htm)
- Load and Unload Add-in (VB.NET) (Load_and_Unload_Add-in_Example_VBNET.htm)
- Load and Unload Add-in (VBA) (Load_and_Unload_Add-in_Example_VB.htm)

## See Also

- `ISldWorks.LoadAddIn`