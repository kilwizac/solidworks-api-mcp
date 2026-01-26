---
type: method
interface: ISketchSegment
member: IGetConstraints
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.SketchConstraintsDelAll
  - ISketchSegment.GetConstraints
  - ISketchSegment.IGetConstraintsCount
keywords:
  - constraints
  - sketch
  - see
  - also
  - isketch
  - igetconstraints
  - isketchsegment
  - segment
  - string
---

# ISketchSegment.IGetConstraints

Gets the constraints for this sketch segment.

## Signature

```csharp
System.String IGetConstraints()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segment constraints (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The available constraint values are as follows:
sgHORIZONTAL
sgHORIZPOINTS
sgVERTICAL
sgVERTPOINTS
sgCOLINEAR
sgCORADIAL
sgPERPENDICULAR
sgPARALLEL
sgTANGENT
sgCONCENTRIC
sgCOINCIDENT
sgSYMMETRIC
sgATMIDDLE
sgATINTERSECT
sgATPIERCE
sgFIXED
sgANGLE
sgARCANG180
sgARCANG270
sgARCANG90
sgARCANGBOTTOM
sgARCANGLEFT
sgARCANGRIGHT
sgARCANGTOP
sgDIAMETER
sgDISTANCE
sgSAMELENGTH
sgOFFSETEDGE
sgSNAPANGLE
sgSNAPGRID
sgSNAPLENGTH
sgUSEEDGE
sgMERGEPOINTS

## Examples

- Get Sketch Segment Constraints (C++) (Get_Sketch_Segment_Constraints_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.SketchConstraintsDelAll`
- `ISketchSegment.GetConstraints`
- `ISketchSegment.IGetConstraintsCount`