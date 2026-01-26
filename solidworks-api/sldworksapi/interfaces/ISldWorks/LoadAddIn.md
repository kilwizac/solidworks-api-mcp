---
type: method
interface: ISldWorks
member: LoadAddIn
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
  - ISldWorks.UnloadAddIn
keywords:
  - add
  - ins
  - load
  - photoview
  - 360
  - loadaddin
  - isldworks
  - sld
  - works
  - file
  - name
  - string
  - int32
  - unload
  - vb
  - net
  - vba
---

# ISldWorks.LoadAddIn

Loads the specified add-in in SOLIDWORKS.

## Signature

```csharp
System.Int32 LoadAddIn( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Fully qualified file name of the add-in

## Return Value

Status of loading the add-in as defined in swLoadAddinError_e

## Remarks

You cannot load MBD using its add-in path. Instead, load the MBD add-in as follows:
status = swApp.
LoadAddIn
('MBD')

## Examples

- Load and Unload Add-in (C#) (Load_and_Unload_Add-in_Example_CSharp.htm)
- Load and Unload Add-in (VB.NET) (Load_and_Unload_Add-in_Example_VBNET.htm)
- Load and Unload Add-in (VBA) (Load_and_Unload_Add-in_Example_VB.htm)

## See Also

- `ISldWorks.UnloadAddIn`