---
type: method
interface: ISldWorks
member: LoadFile4
returns: ModelDoc2
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and file name of the third-party native CAD part or assembly document to import (see Remarks )
  -
    name: ArgString
    type: System.String
    description: Space-separated string that allows optional arguments to be specified when opening a third-party native CAD file; empty string if 3D Interconnect is enabled (see Remarks )
  -
    name: ImportData
    type: System.Object
    description: IImportIgesData , IImportDxfDwgData , or IImportStepData object; null or Nothing if 3D Interconnect is not enabled (see Remarks )
  -
    name: Errors
    type: System.Int32
    description: Errors as defined in swFileLoadError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IFeatureManager.InsertDwgOrDxfFile2
  - ISldWorks.OpenDoc6
keywords:
  - dxf
  - dwg
  - files
  - load
  - iges
  - see
  - also
  - iimportigesdata
  - import
  - non
  - native
  - solidworks
  - file
  - loadfile4
  - isldworks
  - sld
  - works
  - file4
  - name
  - string
  - arg
  - data
  - object
  - errors
  - int32
  - model
  - doc2
  - part
  - sketch
  - vba
  - specify
  - levels
  - values
  - vb
  - net
  - use
  - 3d
  - interconnect
  - third
  - party
  - cad
---

# ISldWorks.LoadFile4

Loads a third-party native CAD file into a new SOLIDWORKS document using 3D Interconnect.

## Signature

```csharp
ModelDoc2 LoadFile4( 
   System.String
FileName
,
   System.String
ArgString
,
   System.Object
ImportData
,
   out System.Int32
Errors
)
```
## Parameters

- `FileName` (System.String): Full path and file name of the third-party native CAD part or assembly document to import (see Remarks )
- `ArgString` (System.String): Space-separated string that allows optional arguments to be specified when opening a third-party native CAD file; empty string if 3D Interconnect is enabled (see Remarks )
- `ImportData` (System.Object): IImportIgesData , IImportDxfDwgData , or IImportStepData object; null or Nothing if 3D Interconnect is not enabled (see Remarks )
- `Errors` (System.Int32): Errors as defined in swFileLoadError_e

## Return Value

Model document

## Remarks

This method:
Uses 3D Interconnect to load FileName into a new SOLIDWORKS document. Before calling this method, turn on 3D Interconnect by setting
Tools > Options > System Options > Import > Enable 3D Interconnect
or calling
ISldWorks::SetUserPreferenceToggle
(
swUserPreferenceToggle_e
.swMultiCAD_Enable3DInterconnect, True). With 3D Interconnect enabled, this method supports the following third-party native CAD formats and versions:
ACIS: .sat, .sab, .asat, .asab for r1 - 2018 1.0
Autodesk® Inventor: .ipt for V6-V2018, .iam for V11 - V2018
CATIA® V5: .CATPart, .CATProduct for V5R8 - V5-6R2017
IGES: .igs, .iges for up to 5.3
JT: .jt for JT 8.x, 9.x, and 10.x
PTC®: .prt, .prt.*, .asm.* for Pro/ENGINEER® 16 - Creo 4.0
Solid Edge®: .par, .asm, .psm for V18 - ST10
STEP: .stp, .step for AP203, AP214, AP24
NX™ software: .prt for UG 11 - NX 11
Imports FileName into the appropriate native SOLIDWORKS part or assembly.
For parts, the SOLIDWORKS file created is a copy of the original non-native file. The copy retains an external reference to the original CAD file. If the original third-party native file is modified in its orginal application, the SOLIDWORKS copy can be updated to import those changes. Changes to the SOLIDWORKS copy do not propagate back to the original file.
For assemblies, you must save the new SOLIDWORKS assembly in order for SOLIDWORKS to import the third-party native assembly and create the copy. Only after saving the new SOLIDWORKS assembly can you edit the imported top-level assembly or break its reference link. Editing lower-level components of the imported top-level assembly or individually breaking their reference links is not supported.
See the
IImport3DInterconnectData
Remarks for information about editing imported CAD data and breaking reference links to third-party native CAD parts and assemblies.
Imports the geometry as a featureless solid body.
Does not import FileName into any existing SOLIDWORKS file or the active document. To import a third-party native CAD file into an existing SOLIDWORKS:
Part, use
IPartDoc::InsertImportedFeature
.
Assembly, use
IAssemblyDoc::InsertImportedComponent
.
Imports third-party native CAD files using different behavior if 3D Interconnect is not enabled:
If 3D Interconnect is not enabled and you are importing...
Then...
Third-party native CAD files
Set ArgString to
FWNS
to display a FeatureWorks dialog after opening.
Pro/E files
To import features, set ArgString to
R
To import geometry, set ArgString to:
B
Direct geometry import with knitting
C
Direct geometry import without knitting
D
Geometry import with knitting
E
Geometry import without knitting
S
Surface geometry import with knitting
These arguments are case sensitive. Specifying one of these options suppresses dialog.
Non DXF/DWG and Non Pro/E files
To import the foreign file into a new SOLIDWORKS document, set ArgString to
r.
For example, to import an IGES file named
cup.igs
into a new SOLIDWORKS document:
Set swModel = swApp.LoadFile4 "D:\Samples\cup.IGS", "r", importData, Err.
See
IImportIgesData
for details about importing IGES data.
NOTES:
Whether the result is a surface or solid depends on the import options. See
Import and Export File Options
for details.
If ArgString is set to an empty string
,
then dialogs may be presented to the end-user during translation.
DXF/DWG files
You can:
Let SOLIDWORKS determine the default values:
Paper size and sheet scale are computed to fit the input data.
Length unit is determined from the header of the input DXF/DWG file.
Sheet name is the same as the layout name in the input DXF/DWG file.
- or -
Set your own values by using:
ISldWorks::GetImportFileData
to obtain the IImportDxfDwgData interface.
Use the following methods with a Sheet argument of "" (an empty string) to set up your defaults before loading the file:
IImportDxfDwgData::GetPaperSize
IImportDxfDwgData::GetPosition
IImportDxfDwgData::GetSheetScale
IImportDxfDwgData::ImportMethod
IImportDxfDwgData::LengthUnit
IImportDxfDwgData::SetPaperSize
IImportDxfDwgData::SetPosition
IImportDxfDwgData::SetSheetScale
IImportDxfDwgData::SheetName
See
IImportDxfDwgData
for details about importing DXF/DWG data.
NOTES:
Getting the IImportDxfDwgData interface does not get default values from the input file. Any values not set by you are set to the values computed by SOLIDWORKS.
If the DWG/DXF file has multiple sheets, use these methods with a valid layout name in the Sheet argument to set up sheet specific settings, which overrides the default settings. If any of the individual items are not specified for a given layout name, the value used is from the defaults (layout name ""). If the default value is not specified, SOLIDWORKS computes and uses a meaningful value for that item.

## Examples

- Import DXF File Into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)
- Import IGES File (VBA) (Import_IGES_File_Example_VB.htm)
- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)
- Use 3D Interconnect to Import Third-Party Native CAD Files (C#) (Import3DInterconnect_Example_CSharp.htm)

## See Also

- `IFeatureManager.InsertDwgOrDxfFile2`
- `ISldWorks.OpenDoc6`