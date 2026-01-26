---
type: method
interface: IAssemblyDoc
member: CreateMateData
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of mate to create as defined in swMateType_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AutoMateRepair
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - mates
  - creatematedata
  - assembly
  - doc
  - create
  - mate
  - data
  - type
  - int32
  - object
  - imatefeaturedata
---

# IAssemblyDoc.CreateMateData

Creates a mate feature data object for the specified mate type.

## Signature

```csharp
System.Object CreateMateData( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of mate to create as defined in swMateType_e (see Remarks )

## Return Value

IMateFeatureData

## Remarks

Type must be one of the following mate types as defined in swMateType_e:
swMateANGLE
swMateCAMFOLLOWER
swMateCOINCIDENT
swMateCONCENTRIC
swMateDISTANCE
swMateGEAR
swMateHINGE
swMateLINEARCOUPLER
swMateLOCK
swMatePARALLEL
swMatePERPENDICULAR
swMatePROFILECENTER
swMateRACKPINION
swMateSCREW
swMateSLOT
swMateSYMMETRIC
swMateTANGENT
swMateUNIVERSALJOINT
swMateWIDTH
To create a mate, see the
IAssemblydoc::CreateMate
Remarks section.

## Examples

- IMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateFeatureData)

## See Also

- `IAssemblyDoc.AutoMateRepair`